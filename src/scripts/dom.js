
export const DOM = {
    goalsNodes: document.querySelector("#active-goals"),
    goalsNodeArray: [],
    showGoal: function(goal) {
        function updateCredentials() {
            name.textContent = goal.name;
            description.textContent = goal.description;
            progress.textContent = Math.round(goal.progress * 100) + "% ";
            step.textContent = `(step: ${goal.step * 100}%)`;
        }

        const goalNode = document.createElement("div");
        const name = document.createElement("h3");
        const description = document.createElement("p");
        const progress = document.createElement("span");
        const step = document.createElement("span");
        const progressButton = document.createElement("button");

        updateCredentials();

        progressButton.textContent = "Add progress";
        goalNode.append(name, description, progress, step, progressButton);
        this.goalsNodeArray.push(goalNode);
        console.log(this.goalsNodeArray);
        this.goalsNodes.append(goalNode);
        progressButton.addEventListener('click', () => {
            if (goal.update()) {
                alert("Task completed!");
                progressButton.remove();
                step.remove();
                progress.textContent = "Completed! Moving to trash...";
                setTimeout(()=>{goalNode.remove()}, 2000)
            } else {
                updateCredentials();
            }
        })
   },
}