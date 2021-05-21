{
  type ToDo = {
    title: string;
    description: string;
  };

  // function display(todo: ToDo) {
  // 불변성을 보장해주어야한다.
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';
  }
}