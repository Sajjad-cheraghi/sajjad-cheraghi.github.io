/*var Data loads in html*/
window.onload = (event) => {

    const Component = {
        "item": '<a class="card" href="{{url}}" target="_blank">\
            <img src="{{image_url}}" alt="{{alt}}">\
            <h3>{{title}}</h3>\
            </a>',
            "category":' <span class="category">{{category}}</span>'
    }
    const View = class {
        constructor(data) {
            this.data = data
        }
        items(cat, component) {
            var val = ""
            for (let i of this.data["items"]) {
                let item = i
                if (item["categories"].indexOf(cat) !== -1) {
                    item["image_url"] = `https://img.youtube.com/vi/${item["youtube_id"]}/mqdefault.jpg `
                    item["url"] = `https://www.youtube.com/watch?v=${item["youtube_id"]}`
                    let str = component
                    for (let j in item) {
                        str = str.replaceAll("{{" + j + "}}", item[j])
                    }
                    val += str
                }

            }
            return val
        }
        categories(component){
            let val=""
            for (let i in this.data["category"]) {
                let str = component
                val += str.replaceAll("{{category}}", i)
            }
            return val
        }
    }

    let view = new View(Data)
    let items_container = document.getElementById("item-container")
    items_container.innerHTML = view.items("home", Component["item"])
    let category_container = document.getElementById("cat-container")
    category_container.innerHTML=view.categories( Component["category"])






};