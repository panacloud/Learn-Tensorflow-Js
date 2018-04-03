Tensors
The central unit of data in TensorFlow.js is the tensor: a set of numerical values shaped into an array of one or more dimensions. A Tensor instance has a shape attribute that defines the array shape (i.e., how many values are in each dimension of the array).

The primary Tensor constructor is the tf.tensor function:

    // 2x3 Tensor
    const shape = [2, 3]; // 2 rows, 3 columns
    const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
    a.print(); // print Tensor values
    // Output: [[1 , 2 , 3 ],
    //          [10, 20, 30]]

    // The shape can also be inferred:
    const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
    b.print();
    // Output: [[1 , 2 , 3 ],
    //          [10, 20, 30]]
However, for constructing low-rank tensors, we recommend using the following functions to enhance code readability: tf.scalar, tf.tensor1d, tf.tensor2d, tf.tensor3d and tf.tensor4d.

The following example creates an identical tensor to the one above using tf.tensor2d:

    const c = tf.tensor2d([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
    c.print();
    // Output: [[1 , 2 , 3 ],
    //          [10, 20, 30]]

    // 3x5 Tensor with all values set to 0
    const zeros = tf.zeros([3, 5]);
    // Output: [[0, 0, 0, 0, 0],
    //          [0, 0, 0, 0, 0],
    //          [0, 0, 0, 0, 0]]
In TensorFlow.js, tensors are immutable; once created, you cannot change their values. Instead you perform operations on them that generate new tensors.