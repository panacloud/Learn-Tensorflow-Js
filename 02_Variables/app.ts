import * as tf from '@tensorflow/tfjs';

const initialValues = tf.zeros([5]);
const tfvariable = tf.variable(initialValues); // initialize biases
tfvariable.print(); // output: [0, 0, 0, 0, 0]

const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
tfvariable.assign(updatedValues); // update values of biases
tfvariable.print(); // output: [0, 1, 0, 1, 0]