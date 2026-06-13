# SAE - Prix immobiliers Niortais
# Regression lineaire simple sans lm() ni predict()

# Importations
train <- read.csv2("train.csv", stringsAsFactors = FALSE)
pred  <- read.csv2("to_predict.csv", stringsAsFactors = FALSE)


#  Fonctions utilitaires 

# Calcul de b0 et b1 par les moindres carres
calc_coefs <- function(x, y) {
  b1 <- sum((x - mean(x)) * (y - mean(y))) / sum((x - mean(x))^2)
  b0 <- mean(y) - b1 * mean(x)
  return(c(b0 = b0, b1 = b1))
}


# predit sur pred_seg
traiter_segment <- function(nom, train_seg, pred_seg) {
  x <- train_seg$Surface.reelle.bati
  y <- train_seg$Valeur.fonciere
  
  coefs <- calc_coefs(x, y)
  b0 <- as.numeric(coefs["b0"])
  b1 <- as.numeric(coefs["b1"])
  
  cat(nom, "-> n =", nrow(train_seg)," / b0 =", round(b0), " / b1 =", round(b1, 1), "\n")
  
  surf <- pred_seg$Surface.reelle.bati
  surf[is.na(surf)] <- median(x, na.rm = TRUE)
  
  prix <- b0 + b1 * surf
  return(data.frame(id = pred_seg$id, Valeur.fonciere = prix, row.names = NULL))
}


# Segmentations
# Communes classees selon leur niveau de prix moyen
periurbain_haut <- c(
  "BESSINES", "CHAURAY", "ECHIRE", "VOUILLE", "SAINT GELAIS", "MAGNE",
  "AIFFRES", "SAINT-MAXIRE", "SAINT-SYMPHORIEN", "SANSAIS", "SCIECQ",
  "PRIN-DEYRANCON", "SAINT-REMY", "EPANNES", "LA CRECHE", "COULON", "LE BOURDET"
)

periurbain_bas <- c(
  "FRONTENAY-ROHAN-ROHAN", "PRAHECQ", "BEAUVOIR-SUR-NIORT",
  "SAINT-HILAIRE-LA-PALUD", "ARCAIS", "LE VANNEAU-IRLEAU",
  "MAUZE-SUR-LE-MIGNON", "VILLIERS-EN-PLAINE", "FORS", "VALLANS",
  "MARIGNY", "LA ROCHENARD", "BRULAIN", "GERMOND-ROUVRE", "JUSCORPS",
  "GRANZAY-GRIPT", "AMURE"
)

communes_non_rural <- c("NIORT", periurbain_haut, periurbain_bas)


# SEGMENT 1 : Tous les appartements

result_1 <- traiter_segment(
  "Appartements    ",
  train[train$Type.local == "Appartement", ],
  pred[pred$Type.local  == "Appartement", ]
)

# SEGMENT 2 : Maisons a Niort

result_2 <- traiter_segment(
  "Maison Niort    ",
  train[train$Type.local == "Maison" & train$Commune == "NIORT", ],
  pred[pred$Type.local  == "Maison" & pred$Commune  == "NIORT", ]
)

# SEGMENT 3 : Maisons periurbaines haut de gamme

result_3 <- traiter_segment(
  "Maison Periurb H",
  train[train$Type.local == "Maison" & train$Commune %in% periurbain_haut, ],
  pred[pred$Type.local  == "Maison" & pred$Commune  %in% periurbain_haut, ]
)


# SEGMENT 4 : Maisons periurbaines bas de gamme

result_4 <- traiter_segment(
  "Maison Periurb B",
  train[train$Type.local == "Maison" & train$Commune %in% periurbain_bas, ],
  pred[pred$Type.local  == "Maison" & pred$Commune  %in% periurbain_bas, ]
)


# SEGMENT 5 : Maisons rurales (tout le reste)

result_5 <- traiter_segment(
  "Maison Rural    ",
  train[train$Type.local == "Maison" & !(train$Commune %in% communes_non_rural), ],
  pred[pred$Type.local  == "Maison" & !(pred$Commune  %in% communes_non_rural), ]
)


# Assemblage et export CSV2 
prediction <- rbind(result_1, result_2, result_3, result_4, result_5)

write.csv2(prediction, "prediction.csv", row.names = FALSE)
cat("Export OK :", nrow(prediction), "lignes -> prediction.csv\n")
