from flask import Flask, render_template

app = Flask(__name__)

# Mock data for coffee menu
coffee_menu = [
    {"name": "Espresso", "price": "$2.50"},
    {"name": "Latte", "price": "$3.00"},
    {"name": "Cappuccino", "price": "$3.25"},
    {"name": "Mocha", "price": "$4.00"},
    # Add more coffee items here
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/menu")
def menu():
    return render_template("menu.html", menu_items=coffee_menu)

if __name__ == "__main__":
    app.run(debug=True)