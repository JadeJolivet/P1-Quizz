let playerArray = ["avatar", "avatar1", "avatar2", "avatar3", "avatar4", "avatar5"];

playerArray.forEach(function(avatar) {
    const element = document.getElementById(avatar);

    element.addEventListener("click", function () {
        playerArray.forEach(function(otherItem) {
            const otherElement = document.getElementById(otherItem);
            if (otherElement !== element) {
                otherElement.removeAttribute('data-clicked');
                otherElement.style.boxShadow = "";
                otherElement.style.border = "";
            }
        });

        if (!this.getAttribute('data-clicked')) {
            this.setAttribute('data-clicked', 'true');
            this.style.boxShadow = "0 0 10px 1px #BAF5FF";
            this.style.border = "0.1rem solid rgb(186, 245, 255)";
        } else {
            this.removeAttribute('data-clicked');
            this.style.boxShadow = "";
            this.style.border = "";
        }
    });
});