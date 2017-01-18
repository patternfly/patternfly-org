require "set"

module Jekyll
  class PatternPage
    attr_accessor :url, :library, :name, :title, :filename


    def initialize(url)
      @url = url
      parts = url.split('/')
      @library = parts[2]
      @name = parts[3]
      @filename = parts[4]
      @title = generateTitle(@name)
    end

    def generateTitle(string)
      string.split('-')
        .each{|i| i.capitalize! if ! ['and', 'or'].include? i }
        .join(' ') unless string.nil?
    end

    def ==(other)
      self.url == other.url
    end

    def <=>(other)
      self.url <=> other.url
    end

    def to_liquid
      {
        'url' => url,
        'library' => library,
        'name' => name,
        'title' => title
      }
    end
  end

  class PatternLibrary
    attr_accessor :library, :title
    def initialize(url)
      @url = url
      parts = url.split('/')
      @library = parts[2]
      @title = generateTitle(@library)
    end

    def generateTitle(string)
      string.split('-')
        .each{|i| i.capitalize! if ! ['and', 'or'].include? i }
        .join(' ') unless string.nil?
    end

    def ==(other)
      self.library == other.library
    end

    def <=>(other)
      self.library <=> other.library
    end

    def to_liquid
      {
        'library' => library,
        'title' => title
      }
    end
  end

  class SitePatternPageGenerator < Jekyll::Generator
    def generate(site)
      libs = Array.new
      pages = Array.new
      site.pages.each do |page|
        parts = page.url.split('/')
        if ( parts[1] == 'pattern-library' && !parts[2].nil?)
          patternPage = PatternPage.new(page.url)
          pages.push(patternPage) if patternPage.filename.nil?
          patternLibrary = PatternLibrary.new(page.url)
          libs.push(patternLibrary) unless libs.include?(patternLibrary)
        end
      end
      site.config['patternLibraries'] = libs.sort
      site.config['patternPages'] = pages.sort
    end
  end
end
