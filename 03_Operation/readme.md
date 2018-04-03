#operations

While tensors allow you to store data, operations (ops) allow you to manipulate that data. TensorFlow.js provides a wide variety of ops suitable for linear algebra and machine learning that can be performed on tensors. Because tensors are immutable, these ops do not change their values; instead, ops return new tensors.

Available ops include unary ops such as `square`:

    // 1) making square of tensor
    const tensor_squared = t1.square();
    tensor_squared.print();
    // Output: [[1, 4 ],
    //          [9, 16]]



And binary ops such as `add`, `sub`, and `mul`:

    const t1_plus_t2 = t1.add(t2);
    t1_plus_t2.print();
    // Output: [[6 , 8 ],
    //          [10, 12]]

TensorFlow.js has a chainable API; you can call ops
on the result of ops:

    const t1_plus_t2_square = t1.add(t2).square();
    t1_plus_t2_square.print();
    // Output: [[36 , 64 ],
    //         [100, 144]]

    // All operations are also exposed as functions in the main namespace,
    // so you could also do the following:
    const sq_sum = tf.square(tf.add(t1, t2));
    sq_sum.print();
    // Output: [[36 , 64 ],
    //         [100, 144]]
