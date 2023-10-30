
let new_mod_og = document.getElementById("new_mod_og");

new_mod_og.addEventListener("click", () => {

    const new_mod = document.createElement("ol");
    const title_mod = document.createElement("li");
    const thumbnail_mod = document.createElement("li");
    const description_mod = document.createElement("li");

    new_mod.className = "ul_none";
    title_mod.className = "title_mod";
    thumbnail_mod.className = "thumbnail_map";
    description_mod.className = "description_mod";

    document.body.appendChild(new_mod);
    document.body.appendChild(title_mod);
    document.body.appendChild(thumbnail_mod);
    document.body.appendChild(description_mod);

}
)