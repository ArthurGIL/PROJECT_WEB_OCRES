
return(
    getUsers = async (req, res) => {
        const list = await Post.find();
        res.json(list);
    }
);

