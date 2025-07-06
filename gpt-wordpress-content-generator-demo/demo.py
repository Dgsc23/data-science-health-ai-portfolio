"""
Generate a blog post using GPT-4 and publish via WordPress API.
"""
import openai
from wordpress_xmlrpc import Client, WordPressPost

def create_gpt_blog(title):
    prompt = f"Write a detailed, SEO-friendly blog post titled: {title}"
    article = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )['choices'][0]['message']['content']
    wp = Client("yourblog.com/xmlrpc.php", "user", "pass")
    post = WordPressPost()
    post.title = title
    post.content = article
    wp.call(NewPost(post))
    return "Posted!"

# Example usage: create_gpt_blog("Benefits of Yoga for Stress Relief")
