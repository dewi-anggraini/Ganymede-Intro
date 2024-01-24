const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = '&copy; Dewi Anggraini ' + thisYear;
footer.appendChild(copyright);
const skills = ['JavaScript', 'HTML', 'CSS', 'Problem solving'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (const item of skills){
    console.log(item);
    const skill = document.createElement('li');
    skill.innerText = item;
    skillsList.appendChild(skill);
}
//Handle Message Form Submit
const messageForm = document.getElementById('leave_message');
const messageSection = document.getElementById('message_section');
const messageList = messageSection.querySelector('ul');
messageForm.addEventListener("submit", (event) => {    

    event.preventDefault();
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);  
  
    const newMessage = document.createElement('li');

    messageForm.reset();
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>wrote: ${usersMessage}</span>`;   

// remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove'; 
    removeButton.type = "button";    
    
    removeButton.addEventListener('click', (event) => { 
        event.preventDefault();

        const entry = removeButton.parentNode;
        entry.remove();

     });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

 });
const url = 'https://api.github.com/users/dewi-anggraini/repos';
fetch("https://api.github.com/users/dewi-anggraini/repos")
  .then(function(response) {
    return response.json()
  })
  .then(function(repositories) {
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
  
        for (let repo of repositories) {
            console.log(repo);
         const project = document.createElement('li');
         project.innerText = repo.name;
         projectList.appendChild(project);
        }
    })
  .catch(function(error) {
    console.log(error);
  });
