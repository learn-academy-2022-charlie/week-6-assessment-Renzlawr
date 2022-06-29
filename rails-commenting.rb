# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This line is stating that we have a class that is our BlogPosts controller that is inherited from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This line assigns a instance variable named posts to contain all of our existing Blog posts
    @posts = BlogPost.all
  end

  # ---3)
  # This is our controller method for Show, which contains an instance variable that finds a Blog Post based on params past in the url
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This is our controller method for Newm which gives us a form to enter data for our Blog Post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This code will create the data in our new form, taking in strong params, it will then redirect your to the page with all of your blogs if the post is valid, if not, it will redirect you back to a empty form 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # This code will show us a form with existing data from a blog
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This code will submit the changed data in our form and redirect us to the page with all of your blogs if the post is valid, if not, it will redirect you back to a form with the original data
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # This code will redirect the user to the page with all of your blogs if the post fails to delete
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This section is the private section, everything below this keyword will only be able to be accessed in this controller, and not globally
  private
  def blog_post_params
    # ---10)
    # This code is requires that you're making changes to a specific table and permits changes to specific columns within it. 
    params.require(:blog_post).permit(:title, :content)
  end
end
