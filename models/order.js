import dayjs from "dayjs";

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    //   return this.date.toLocaleDateString('en-En', {
    //       year: 'numeric',
    //       month: 'long',
    //       day: 'numeric',
    //       hour: '2-digit',
    //       minute: '2-digit'
    //   })
    let advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)
    return dayjs(this.date).format('MMMM Do, YYYY, HH:mm')
  }
}

export default Order;
