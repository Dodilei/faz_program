import pandas as pd
import os
from events import Sale, Purchase

container = []

def apply_create_objects(container, columns):
    
    def create_objects(row):

        if row["Venda"] and row["Preço"]:


            new_obj = Sale(
                product = "Soja",
                quantity = row["Venda"],
                unity_price = row["Preço"],
                first = "Faz",
                third = row["Destino"],
                timestamp = row["Data"]
            )

            container.append(new_obj)
        
    return create_objects


file = input('Excel file to read:')

sheet = pd.read_excel(file, header = 0, skiprows = 2, index_col = None,
    usecols = "A:E", parse_dates = [0], keep_default_na=False)

func = apply_create_objects(container, sheet.columns)
sheet.apply(func, axis = 1)

columns = ["timestamp", "first_party", "third_party", "product", "quantity", "unity_price", "total_price"]

dic = {i:[] for i in columns}

for i in columns:
    for obj in container:
        dic[i].append(obj.get_attribute(i))

df = pd.DataFrame(dic)