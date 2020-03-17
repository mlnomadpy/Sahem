import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';


export const PaymentMethodSchema = new Schema({

});
PaymentMethodSchema.plugin(timestamps);
PaymentMethodSchema.index({ createdAt: 1, updatedAt: 1 });
export const PaymentMethod = mongoose.model('PaymentMethod', PaymentMethodSchema);