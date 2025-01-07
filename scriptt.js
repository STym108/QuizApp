const qs = [
    {
        Questions: "2. What is the time complexity of binary search in a sorted array?",
        Options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    },
    {
        Questions: "3. Which sorting algorithm is best for nearly sorted data?",
        Options: ["Merge Sort", "Quick sort", "Bubble sort", "Insertion Sort"],
    },
    {
        Questions: "4. What is the condition for deadlock in an operating system?",
        Options: ["No preemption", "Circular wait", "Mutual exclusion", "All"],
    },
    {
        Questions: "5. Which data structure is used for implementing recursion?",
        Options: ["Queue", "Stack", "Array", "Binary Tree"],
    },
    {
        Questions: "6. Which scheduling algorithm can cause starvation?",
        Options: ["Round Robin", "FCFS", "Priority", "SJF"],
    },
    {
        Questions: "7. Which of the following is used to prevent race conditions?",
        Options: ["Semaphore", "Kernel manage", "Context Switch", "CPU utilisation"],
    },
    {
        Questions: "8. In dynamic programming, which property is essential?",
        Options: ["Greedy", "Divide and Conquer", "Overlapping Subproblems", "Recursion"],
    },
    {
        Questions: "9. What is the purpose of a mutex in an operating system?",
        Options: ["FCFS", "Preemption", "Memory Allocation", "Process Scheduling"],
    },
    {
        Questions: "10. Which traversal is used to get a sorted order in a BST?",
        Options: ["Inorder","Preorder", "PostOrder", "Level order"],
    }
];
const ans=[0,1,3,3,1,2,0,2,3,0];
// Timer
var t = document.querySelector(".samay");
var x = 20;
var timer_fun;

function startTimer() {
    x = 20;
    t.textContent = x;
    timer_fun = setInterval(() => {
        x--;
        if (curridx < qs.length) {
            t.textContent = x;        }
        
        if (x < 0||curridx>=qs.length) {
            clearInterval(timer_fun);
            t.textContent="0";
            // Optionally handle time out here
        }
    }, 1000);
}
// Option lists selected
var optionclicked = document.querySelectorAll(".options li");
var y = 0;
var ansidx=0;
var count=0;
optionclicked.forEach(option => {
    option.addEventListener("click", () => {
        if (y == 0) {
            option.style.backgroundColor = "blue";
            y++;
    for(var i=0;i<4;i++){
        if(optionclicked[i].style.backgroundColor=="blue"&&i!=ans[ansidx]){
            option.style.backgroundColor = "red";
            optionclicked[ans[ansidx]].style.backgroundColor="blue";
            ansidx++; break;
        }
        else if(optionclicked[i].style.backgroundColor=="blue"&&i==ans[ansidx]){ ansidx++;count++; break;}
    }
        }

        clearInterval(timer_fun);
    });
});

// Next button selected
var nextbut = document.querySelector(".nextbutton");
var curridx = 0;

nextbut.addEventListener("click", () => {
    if (curridx < qs.length) {
        question_changing_fun();
    }
});

// Changing question on next click
function question_changing_fun() {
    const changeq = document.querySelector(".ques");
    const changeopt = document.querySelectorAll(".options li");

    changeq.textContent = qs[curridx].Questions;
    qs[curridx].Options.forEach((option, i) => {
        changeopt[i].textContent = option;
    });

    changeopt.forEach(option => {
        option.style.backgroundColor = ""; // Reset background color
    });

    curridx++;
    y = 0; // Reset option clicked state
    startTimer(); // Restart timer for the next question

    if (curridx >= qs.length) {
        var finish = document.querySelector(".questionpart");
        finish.innerHTML = '';
        finish.innerHTML = ` ********Well done*********<br><br> you solved ${count} Out of 10 Questions `;
        finish.style.fontWeight="bolder";
         finish.style.fontSize = "2em"
    }
}

// Start the timer for the first question
startTimer();