// Partial<T>
// Constructs a type with all properties of T set to optional.
{
  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
  }

  const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
  };

  const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
  });
}

// Readonly<T>
// Constructs a type with all properties of T set to readonly
{
  interface Todo {
    title: string;
  }

  const todo: Readonly<Todo> = {
    title: 'Delete inactive users',
  };
}

// Record<K,T> #
// Constructs a type with a set of properties K of type T.
{
  interface PageInfo {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  const x: Record<Page, PageInfo> = {
    about: {title: 'about'},
    contact: {title: 'contact'},
    home: {title: 'home'},
  };
}

// Pick<T,K> #
// Constructs a type by picking the set of properties K from T.
{
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, 'title' | 'completed'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };
}

// Omit<T,K> #
// Constructs a type by picking all properties from T and then removing K.
{
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Omit<Todo, 'description'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };
}

// Exclude<T,U> #
// Constructs a type by excluding from T all properties that are assignable to U.
{
  type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
  type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
}

// Extract<T,U> #
// Constructs a type by extracting from T all properties that are assignable to U.

{
  type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
}
