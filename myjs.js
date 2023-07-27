const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);
const globalStore = [];


const generateNewCard =(taskData) =>

    ` 
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
                <div class="card ">
                    <h5 class="card-header d-flex justify-content-end gap-2"><button type="button"
                            class="btn btn-outline-success"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                    </h5>
                    <div class="card-body">
                        <img
                                src=${taskData.imageUrl}
                                class="card-img-top" alt="..." >
                        <h5 class="card-title mt-3 fw-bold text-primary"> ${taskData.taskTitle}</h5>
                        <p class="card-text">${taskData.taskDescription}</p>
                        <a href="#" class="btn btn-primary">${taskData.taskType }</a>
                    </div>
                </div>

            </div>
    `
;



const loadIntialCardData = () => {

    const getCardData = localStorage.getItem("Tasky");

    const {cards} =JSON.parse(getCardData);


    cards.map((cardObject) =>{
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));


        globalStore.push(cardObject);
    })

};

const saveChanges = () =>{
    const taskData = {
      id:`${Date.now()}`,
      imageUrl:document.getElementById("imageurl").value,
      taskTitle:document.getElementById("tasktitle").value,
      taskType:document.getElementById("tasktype").value,
      taskDescription:document.getElementById("taskdescription").value

    }
    console.log(taskData);
    
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));
    

    globalStore.push(taskData);
    localStorage.setItem("Tasky",JSON.stringify({cards:globalStore}));

} ; 



