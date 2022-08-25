const setTagAsDone = async (el, id) => {
  event.preventDefault();
  try {
    let headers = new Headers({ 'Content-Type' : 'application/json' });
    let body = JSON.stringify({ task: { done: el.checked }});
    let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT' });
    let data = await response.json();  
    let task = data.task;
    let parent = el.parentNode;

    if(task.done) {
      el.checked = true;
      parent.classList.add('has-text-success');
      parent.classList.add('is-italic');
    } else {
      el.checked = false;
      parent.classList.remove('has-text-success');
      parent.classList.remove('is-italic');
    }

  } catch (error) {
    alert('Erro ao atualizar a tarefa');
  }
}