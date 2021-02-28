# frozen_string_literal: true

require 'minitest/autorun'

# Solution
def sq(h, v, s)
  (Math.hypot(h, s) / h * v).round 4
end

# Sample Test
describe 'Basic Tests' do
  it 'should test for basic tests' do
    assert_equal(sq(4, 16, 3), 20)
    assert_equal(sq(4, 4, 3), 5)
    assert_equal(sq(8, 9, 37), 42.5869)
    assert_equal(sq(526, 682, 140), 705.7435)
    assert_equal(sq(247, 857, 669), 2474.3392)
    assert_equal(sq(2, 11, 47), 258.7339)
    assert_equal(sq(73, 97, 244), 338.4185)
    assert_equal(sq(15, 774, 948), 48_922.923)
    assert_equal(sq(21, 29, 60), 87.7856)
    assert_equal(sq(83, 97, 86), 139.6799)
  end
end
