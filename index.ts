import type { A } from './type';

declare function Decorator( propertyName?: string ): ParameterDecorator;

export default class Test {
	
	async func(
		@Decorator() param: A
	) {
		return param;
	}
	
}
