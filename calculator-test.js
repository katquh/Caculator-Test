
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 1000,
    years : 3,
    rate : 5,
  }
  expect(calculateMonthlyPayment(values)).toEqual(29.97)
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 1000,
    years : 3,
    rate : 5,
  }
  expect(calculateMonthlyPayment(values).toString().split(".")[1].length).toEqual(2)
});

it("it should handle partial years", function() {
  let values = {
    amount: 100000,
    years : 5.5,
    rate : 5,
}
  expect(calculateMonthlyPayment(values)).toEqual(1736.16)
});