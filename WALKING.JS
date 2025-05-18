 let tasks = [];

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const priorityInput = document.getElementById('priorityInput');
            const taskText = taskInput.value.trim();
            const priority = priorityInput.value;
            if (taskText) {
                tasks.push({ text: taskText, priority: priority, completed: false });
                taskInput.value = '';
                updateTasks();
            }
        }

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            updateTasks();
        }

        function updateTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = tasks.map((task, index) => `
                <li class="task-item">
                    <span onclick="toggleTask(${index})" class="${task.priority} priority">${task.priority.toUpperCase()}</span>
                    <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">${task.text}</span>
                </li>
            `).join('');
            updateProgress();
        }

        function updateProgress() {
            const completedTasks = tasks.filter(task => task.completed).length;
            const totalTasks = tasks.length;
            const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
            document.getElementById('progressFill').style.width = `${progress}%`;
            document.getElementById('progressText').textContent = `${progress}% Completed`;
            const completeBtn = document.getElementById('completeBtn');
            completeBtn.classList.toggle('show', progress === 100);
        }

        function completeWork() {
            alert('Work Completed! Great Job!');
        }