const Sidebar = document.querySelector(".sidebar")
const ShowSideBarButton = document.getElementById("ShowSidebar")
const CloseSideBarButton = document.getElementById("CloseSidebar")

ShowSideBarButton.addEventListener("click", function(){
    Sidebar.style.display = "flex"
})

CloseSideBarButton.addEventListener("click", function(){
    Sidebar.style.display = "none"
})