# Environment
* OS : Windows 10 pro Edition
* Browser : Chrome
* Tool / IDE : VS Code
* Language : HTML, JavaScript ( d3.js )

# Visualization for Solve Problem
* According to United States Census Bureau - which investigate US’s population</br>
Chicago is **the third** most populated city in the United States
+ Because there are many people **a lot of crimes** occurred, so we need to figure out the **problem**
- This time, we will use map visualizations to solve the problem

## Data Source
Chicago Crime Data from https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g
Chicago map JSON Data from https://data.cityofchicago.org/Public-Safety/Boundaries-Police-Districts-current-/fthy-xz3r
* ### Pre Processing
  **1.**  In Python, I used Pandas’s read_csv / to_csv method to separate data by years</br>
  but some data is old, so I selected 10 years data ( 2009 ~ 2018 )
  ```python
  import numpy as np
  import pandas as pd
  
  csv_2009 = pd.DafaFrame({"ID":[], "Case Number":[], "Date":[] ... "Location":[]})
  
  csv_data = pd.read_csv('./Crimes_-_2001_to_present.csv',header = None)
  
  n = 0
  
  for i in range(1,7005599) :
      if csv_data[17][i] == "2009" :
          csv_2001.loc[n] = [(csv_data[j][i]) for j in range(22)]
          n = n + 1
  
  csv_2009.to_csv('./crime_2009.csv', sep = ',', na_rep = '')
  ```
  **2.**  In MySQL, I used LOAD DATA method to insert data to database, then I used COUNT method to extract data
  ```SQL
  LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/crime_2009.csv'
  INTO TABLE Crime_Data FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n';
  ```
  
* ### Analyzing
  You can see visualizations in [here](https://ssh1997.github.io/Data_Visualization_HW3/)

* ### Cross Browsing
  - In Chrome
    ![5](https://user-images.githubusercontent.com/48575504/71711814-0c77fd00-2e46-11ea-9b52-3c02799daf5f.PNG)
  - In Firefox
    ![6](https://user-images.githubusercontent.com/48575504/71711825-1863bf00-2e46-11ea-8642-c84cdb405354.PNG)
  - In Microsoft Edge
    ![7](https://user-images.githubusercontent.com/48575504/71711830-1e59a000-2e46-11ea-9337-dba7dd39b2e2.PNG)
  It works well on all three browsers

* ### Interaction
  - Visualization 1
    + To click filter 1, we can see where has which problem
    * To click filter 2, we can see annual data</br>
    ![8](https://user-images.githubusercontent.com/48575504/71711868-43e6a980-2e46-11ea-8c05-463778bfcc7b.PNG)
    ![10](https://user-images.githubusercontent.com/48575504/71711915-624ca500-2e46-11ea-9394-0116916258da.PNG)
  - Visualization 2
    + To click filter 1, we can see annual data
    * To click filter 2, we can see different types of danger zone</br>
  ![11](https://user-images.githubusercontent.com/48575504/71711923-6973b300-2e46-11ea-9460-cae303af1ed8.PNG)
  ![12](https://user-images.githubusercontent.com/48575504/71711927-6f699400-2e46-11ea-886f-2a6b5ea03c60.PNG)
