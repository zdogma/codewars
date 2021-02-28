# frozen_string_literal: true

require 'minitest/autorun'
require 'pry'

# Solution
def trailing_zeros(num, base)
  return 0 if num.zero?

  (1..num).inject(1) { |f, n| f * n }.to_s(base).match(/(0*$)/).to_s.length
end

# Sample Test
describe 'Basic Tests' do
  it 'should test for basic tests' do
    assert_equal(trailing_zeros(1024, 2), 1023)
  end
end
