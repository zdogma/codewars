# frozen_string_literal: true

require 'minitest/autorun'
require 'pry'

# Solution
# rubocop:disable Metrics/AbcSize, Metrics/CyclomaticComplexity, Metrics/MethodLength, Metrics/PerceivedComplexity
def generate_bc(url, separator)
  ignore_words = %w[the of in from by with and or for to at a]
  ignore_paths = %w[index www]

  paths = url.gsub(%r{^https?://}, '').split('/').tap(&:shift)
  bc_paths = paths.map { |path| path.split(/\.|#|\?/).first }
                  .delete_if { |path| ignore_paths.include?(path) }
                  .compact
  return '<span class="active">HOME</span>' if bc_paths.empty?

  elements = bc_paths.map.with_index(1) do |path, idx|
    text = if path.length > 30
             path.split('-')
                 .delete_if { |word| ignore_words.include?(word) }
                 .map { |word| word.chars.first }
                 .join
           else
             path
           end
    upcased_text = text.gsub('-', ' ').upcase

    case idx
    when bc_paths.size
      "<span class=\"active\">#{upcased_text}</span>"
    else
      "<a href=\"/#{bc_paths[0..idx - 1].join('/')}\/\">#{upcased_text}</a>"
    end
  end

  elements.unshift('<a href="/">HOME</a>').join(separator)
end
# rubocop:enable Metrics/AbcSize, Metrics/CyclomaticComplexity, Metrics/MethodLength, Metrics/PerceivedComplexity

# Sample Test
describe 'Basic Tests' do
  it 'should test for basic tests' do
    # rubocop:disable Layout/LineLength
    assert_equal(generate_bc('mysite.com/pictures/holidays.html', ' : '), '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>')
    assert_equal(generate_bc('www.codewars.com/users/GiacomoSorbi?ref=CodeWars', ' / '), '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>')
    assert_equal(generate_bc('www.microsoft.com/important/confidential/docs/index.htm#top', ' * '), '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>')
    assert_equal(generate_bc('mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp', ' > '), '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>')
    assert_equal(generate_bc('www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi', ' + '), '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>')
    # rubocop:enable Layout/LineLength
  end
end
