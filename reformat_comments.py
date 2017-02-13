import re

#go through the file and split out the annotation data
def splitter(file):
    annotations = file.readlines()

#take the extracted annotation information and rebuild the fdf
def builder(lookup_list):
    
    

counter = 0

'''
Regular expression help comments:
^([\w\s]*?(?=(\d{4})[ ,])) <- looking for the author and year only if it is followed by the year
([pP][aA]?[gG]?[eE]?[ ]?)(\w{1,5})[, ].*?\1(\w{1,5})[, ].*?<- looking for the page
'''
lookup_authoryear = re.compile(r"^([\w\s]*?(?=(\d{4})[ ,]))") 
lookup_page = re.compile(r"(?:.*?[pP][aA]?[gG]?[eE]?[ ]?)([vVsSi\d]{1,6})[, ]") #hitting th problem that I can't capure the repeated page number

authors = [lookup_author.findall(lines.strip()) for lines in annotations]

annotations = [lookup_author.sub("author", lines.strip()) for lines in annotations] #remove the author to ease regex confusion

pages = [lookup_page.findall(lines.strip()) for lines in annotations]

#a little test for the properties of .match
if authors[2]== None:
	print("it's nothing")
else:
	print("there's something here")

#another littles test for the properties of .match
counter = 0
for lines in pages:
    if lines != None:
        lines.groups()
        counter = counter + 1
    else:
        print ("search empty :( for index %d" % (counter))
        counter = counter + 1

#another littles test for the properties of .match
for lines in pages:
    if lines != None:
        print(lines)
        counter = counter + 1
    else:
        print ("search empty :( for index %d" % (counter))
        counter = counter + 1

for lines in annotations:
    authors = lookup_author.match(lines.strip())

with open("C:\\Users\\dchan\\Documents\\adobe_claimcheck_scripts\\testannotations_diversityfile.txt", "r") as f:
    for line in f:
         counter = counter + 1# read into a list and operate over each

print (counter)


