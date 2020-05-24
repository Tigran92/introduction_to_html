class Media {
  constructor(title) {

    this._title = title
    this._isCheckedOut = false;
    this._ratings = [];

  }

   set isCheckedOut(setIsCheckedOut) {
    this._isCheckedOut = setIsCheckedOut;

  }
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {

    if(this.isCheckedOut === true) {
      this.isCheckedOut = false;
    } else {
      this.isCheckedOut = true;
    }

  }

  getAverageRating() {

    let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);

    const lengthOfArray = this._ratings.length;
    
    return ratingSum/lengthOfArray;

    

    
  }

  addRating(addRate) {

    this._ratings.push(addRate);

  }

  


}

const media = new Media('dddd');
console.log(media.toggleCheckOutStatus)