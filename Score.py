"""
This code takes training data from "TrainingData" CSV file
Splits data into train and test data and then implements logistic regression over
train data. Threshold for prediction can be varied by changing the "threshold" variable.
Final optimal threshold can be obtained by maximising the F1 score.
The corresponding threshold which maximises the F1 score is the optimal threshold.
The coefficents obtained from training model can directly be used to calculate the probability of
person paying back the loan. This can be scaled up to required score threshold to accept or reject the
new loan application.
"""


import numpy as np
import pandas as pd
from sklearn import linear_model
from sklearn import cross_validation
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_curve, auc
import matplotlib.pyplot as plt
import random
from sklearn.metrics import f1_score
from sklearn.metrics import precision_score, \
    recall_score, confusion_matrix, classification_report, \
    accuracy_score, f1_score

train=pd.read_csv('C:\\Users\\pavankumarkolla\\Desktop\\TrainingData.csv')

#define variables from cleaned data
predictor_Vars = ["loaninc_ratio", "emp_length", "mths_since_last_delinq", "inq_last_6mths", "delinq_2yrs", "open_acc", "pub_rec", "revol_util", "purpose", "ageon_file", "description" ]

X, y = train[predictor_Vars], train.loan_status

#Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.20)

LogisticModel = linear_model.LogisticRegression()
trained_model=LogisticModel.fit(X_train,y_train)

y_predict = LogisticModel.predict(X_test)

for i in range(0,1481):
    threshold=LogisticModel.predict_proba(X_test)[i,1]
    if(threshold>=0.6):
        y_predict[i] = 1
    else:
        y_predict[i] = 0


print('Coefficients: ', trained_model.coef_)
print('Intercept: ', trained_model.intercept_)
print ('F1 score: ', f1_score(y_test, y_predict))

