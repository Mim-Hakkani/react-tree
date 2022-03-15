import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
const Orranizational_tree = () => {
    return (
     <Tree
  label="Root"
  lineBorderRadius="10px"
  lineColor="green"
  lineHeight="30px"
  lineWidth="3px"
>
  <TreeNode label={<div>Child 1</div>}>
    <TreeNode label={<div><img src='https://www.w3schools.com/w3images/avatar2.png' alt="" height="40" width="40" style={{borderRadius:'50%'}}/></div>} >

         <TreeNode label={<div><img src='https://www.w3schools.com/howto/img_avatar.png' alt="" height="40" width="40" style={{borderRadius:'50%'}}/></div>} />
          <TreeNode label={<div><img src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' alt="" height="40" width="40" style={{borderRadius:'50%'}}/></div>} />
     </TreeNode>
  </TreeNode>

  <TreeNode label={<div>Child 2</div>}>
    <TreeNode label={<div>Grand Child 3</div>} />
    <TreeNode label={<div>Great Grand Child 1</div>} />
    <TreeNode label={<div>Great Grand Child 2</div>} />
    

  </TreeNode>

  <TreeNode label={<div>Child 3</div>}>
    <TreeNode label={<div>Grand Child 1</div>} />
    <TreeNode label={<div>Grand Child 2</div>} />
  </TreeNode>

    <TreeNode label={<div>Child 3</div>}>
      <TreeNode label={<div>Grand Child 1</div>}>
         <TreeNode label={<div>mim</div>} >
             <TreeNode label={<div> A </div>}  />
             <TreeNode label={<div> B </div>}  />
             <TreeNode label={<div> C </div>}  />
             <TreeNode label={<div> D </div>}  />
             <TreeNode label={<div> E </div>}  />
           </TreeNode>

         <TreeNode label={<div>jim</div>} />
      </TreeNode>
      <TreeNode label={<div>Grand Child 2</div>} />
  </TreeNode>


</Tree>
    );
};

export default Orranizational_tree;