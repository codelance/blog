#
# Generates a single archives.html page in site root that lists all posts by month.
#
# Learned from:
# https://github.com/mojombo/jekyll/wiki/Plugins
# https://gist.github.com/707909
#
#
module Jekyll

  class ArchiveGenerator < Generator
    safe true

    def group_by_month(posts)
      months = []
      posts_by_month = {}
      posts.reverse.each do |post|
        key = Time.utc(post.date.year, post.date.month)
        if posts_by_month.has_key?(key)
          posts_by_month[key] << post
        else
          posts_by_month[key] = [post]
          months << key
        end
      end
      return [months,posts_by_month]
    end

    def generate(site)
      archive_data = group_by_month(site.posts)
      months = archive_data[0]
      posts_by_month = archive_data[1]

      site.config['months'] = months
      site.config['posts_by_month'] = posts_by_month
    end
  end

end
