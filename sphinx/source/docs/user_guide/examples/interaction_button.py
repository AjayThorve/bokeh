from bokeh.io import output_file, show
from bokeh.models.widgets import Button

output_file("button.html")

button = Button(label="Foo", button_type="success")

show(button)
