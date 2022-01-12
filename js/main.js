(function(){

    const ul = document.querySelector("ul"),
    input = ul.querySelector("input"),
    countNumb = document.querySelector(".details span");

    let maxTags = 10,
    tags = [];

    countTag();

    function countTag(){
        input.focus();
        countNumb.innerText = maxTags - tags.length;
    }

    function createTag(){
        ul.querySelectorAll("li").forEach(li => li.remove());
        // console.log(tags.slice().reverse());
        tags.slice().reverse().forEach(tag =>{
            let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
            ul.insertAdjacentHTML("afterbegin", liTag);
        });
        countTag();
    }

    function remove(element, tag){
        let index = tags.indexOf(tag);
        tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
        element.parentElement.remove();
        // console.log(tags);
        countTag();
    }

    function addTag(e){
        if(e.key == "Enter"){
            let tag = e.target.value.replace(/\s+/g, ' ');
            // console.log(e.target.value);
            if(tag.legnth > 1 && !tags.includes(tag)){
                if(tags.length < 10){
                    tag.split(',').forEach(tag =>{
                        tags.push(tag);
                        // console.log(tags)
                        createTag();
                    });
                }
            }
            e.target.value = "";
        }
    }

    input.addEventListener("keyup", addTag);

    const removeBtn = document.querySelector("button");
    removeBtn.addEventListener("click", () => {
        tags.length = 0;
        ul.querySelectorAll("li").forEach(li => li.remove());
        countTag();
    });

})();