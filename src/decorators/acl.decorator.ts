import { AclPerm } from '../models/routes.models';
import * as RoutesService from '../routes.service';

// tslint:disable-next-line:function-name
export function Acl(perms: AclPerm[], loadPath?: string): MethodDecorator {
	return (object: object, methodName: string) => {
		RoutesService.addRoute(object, methodName, perms, loadPath);
	};
}
