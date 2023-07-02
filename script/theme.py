import re

def editSVGcolor(file_content,color):
    content = file_content
    new_fill_value = color  # Replace with your desired fill value

    # Use regex to find and replace the fill attribute value inside the svg tag
    new_content = re.sub(r'(<svg[^>]*fill=")[^"]+(")', rf'\1{new_fill_value}\2', content)
    
    return new_content

def editSassColor(file_content,hue):
    content = file_content
    new_hue_value = hue  # Replace with your desired new value

    # Use regex to find and replace the value
    new_content = re.sub(r'(\$theme-hue:\s*)\d+', rf'\g<1>{new_hue_value}', content)
    return new_content



svgList = {
    "menu": '../img/Header/menu.svg',
    "close": "../img/Header/close.svg",
    "facebook": "../img/Footer/facebook.svg"
}

sassList = {
    "variables": "../scss/utilities/_variables.scss"
}

hue = 67
saturation = 89
lightness = 50

for obj in svgList:
    with open(svgList[obj],"rt") as file:
        file_content = file.read()

    color = f"hsl({hue}, {saturation}%, {lightness}%)"
    new_file_content = editSVGcolor(file_content,color)

    with open(svgList[obj], 'w') as file:
        file.write(new_file_content) 

for obj in sassList:
    with open(sassList[obj],"rt") as file:
        file_content = file.read()

    new_file_content = editSassColor(file_content,hue)

    with open(sassList[obj], 'w') as file:
        file.write(new_file_content)
        file.close()
    

     