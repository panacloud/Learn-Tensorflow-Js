import * as tf from '@tensorflow/tfjs';


//two tensors t1 and t2
const t1 = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
const t2 = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);


// 1) making square of tensor
const tensor_squared = t1.square();
tensor_squared.print();
// Output: [[1, 4 ],
//          [9, 16]]



// 2) adding two tensor
const t1_plus_t2 = t1.add(t2);
t1_plus_t2.print();
// Output: [[6 , 8 ],
//          [10, 12]]



// 3) adding two tensor and then square in chain
const t1_plus_t2_square = t1.add(t2).square();
t1_plus_t2_square.print();
// Output: [[36 , 64 ],
//         [100, 144]]




// 4)
// All operations are also exposed as functions in the main namespace,
// so you could also do the following:
const sq_sum = tf.square(tf.add(t1, t2));
sq_sum.print();
// Output: [[36 , 64 ],
//         [100, 144]]
