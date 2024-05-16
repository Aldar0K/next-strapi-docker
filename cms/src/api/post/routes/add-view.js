module.exports = {
  routes: [
    {
      method: 'PATCH',
      path: '/posts/:id/add-view',
      handler: 'post.addView'
    }
  ]
};
