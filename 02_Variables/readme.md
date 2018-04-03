Variables are initialized with a tensor of values. Unlike Tensors, however, their values are mutable. You can assign a new tensor to an existing variable using the assign method:

    const initialValues = tf.zeros([5]);
    const biases = tf.variable(initialValues); // initialize biases
    biases.print(); // output: [0, 0, 0, 0, 0]

    const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
    biases.assign(updatedValues); // update values of biases
    biases.print(); // output: [0, 1, 0, 1, 0]
    
Variables are primarily used to store and then update values during model training.