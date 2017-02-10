import re

#go through the file and split out the annotation data
def splitter(file):
    comments = file.readlines()

#take the extracted annotation information and rebuild the fdf
def builder(lookup_list):
    
    

counter = 0

lookup_author = re.compile(r"^([\w\s]*?(?=\d{4} )).*") #looking for the author only if it is followed by the year

authors = [lookup_author.match(lines.strip()) for lines in comments]

#a little test for the properties of .match
if authors[2]== False:
	print("it's false")
else:
	print("there's something here")


for lines in comments:
    authors = lookup_author.match(lines.strip())

with open("C:\\Users\\dchan\\Documents\\adobe_claimcheck_scripts\\testcomments_diversityfile.txt", "r") as f:
    for line in f:
         counter = counter + 1# read into a list and operate over each

print (counter)


