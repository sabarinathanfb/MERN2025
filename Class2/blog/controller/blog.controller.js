import fs from 'fs'

export const getAllBlog = (req,res) =>{

    try{
        const blogData = fs.readFileSync('mocks/blog.mock.json')
        res.status(200).send(JSON.parse(blogData));
    }catch(e){
        res.status(500).send(e.message);
    }
    
}
export const getBlogById = (req, res) => {
    try {
        const blogId = req.params.blogId;
        // Read the JSON file
        const blogData = fs.readFileSync('mocks/blog.mock.json', 'utf-8');

        // Parse the JSON and find the blog by ID
        const blogDataById = JSON.parse(blogData).find(blog => blog.id == blogId);

        if (blogDataById) {
            res.status(200).json(blogDataById);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const deleteBlogId = (req, res) => {
    try {
        const blogId = req.params.blogId;
        console.log(blogId);
        // Read the JSON file
        const blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));

        // Find the index of the blog
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);


        
        // Remove the blog from the array
        blogData.splice(blogIndexDataById, 1);

        // Write the updated data back to the file
        fs.writeFileSync("mocks/blog.mock.json", JSON.stringify(blogData, null, 2));

        res.status(200).json({ message: "Blog deleted successfully" });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const createBlog = (req, res) => {
    try {
        const newBlogData = req.body;
        console.log(newBlogData);
        // Read existing blog data
        let blogData = JSON.parse(fs.readFileSync("mocks/blog.mock.json", "utf-8"));
        // Add the new blog to the array
        blogData = [...blogData, newBlogData];

        // Write the updated data back to the file
        fs.writeFileSync("mocks/blog.mock.json", JSON.stringify(blogData));

        res.status(201).json({ message: "Blog Created Successfully", blog: newBlogData });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
export const updateBlogById = (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;
        console.log(blogId);
        console.log(newBlogData);

        let blogData = JSON.parse(fs.readFileSync("mocks/blog.mock.json", "utf-8"));

        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);

        blogData[blogIndexDataById] = {...blogData[blogIndexDataById], ...newBlogData}

        // Write the updated data back to the file
        fs.writeFileSync("mocks/blog.mock.json", JSON.stringify(blogData));

        res.status(201).json({ message: "Blog Updated Successfully"});

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
