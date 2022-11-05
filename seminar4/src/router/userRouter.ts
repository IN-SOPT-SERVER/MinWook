import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

//유저 생성 - post api/user
router.post('/', userController.createUser);
//전체 유저 조회 get api/user
router.get('/', userController.getAllUser);
//유저정보 업데이트 patch api/user/:userId
router.patch('/:userId', userController.updateUser);
//유저삭제 delete api/user/:userId
router.delete('/:userId', userController.deleteUser);

export default router;
