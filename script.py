import csv, os
fw = open("DbQuery.txt", "w")
fw.write("insert into bureau_data (id,delinq_2yrs, inq_last_6mths, mths_since_last_deliq,open_acc, pub_rec, revol_util,ageon_file) values\n (")
def csv_reader(file_obj):
        reader = csv.reader(file_obj)
        for row in reader:
                s = repr(row)
                fw.write(s[1:-1])
                fw.write("),\n (")

csv_path = "BureauData.csv"
with open(csv_path, "r") as f_obj:
        next(f_obj)
        csv_reader(f_obj)
        
fw.close()
