import { Mapper } from '../../../../shared/utils/mapper';
import { ResponsibleModel } from '../../domain/models/responsible.model';
import { ResponsibleEntity } from '../entities/responsible.entity';

export class ResponsibleMapperImpl extends Mapper<
  ResponsibleEntity,
  ResponsibleModel
> {
  override mapFrom(param: ResponsibleEntity): ResponsibleModel {
    return {
      id: param.codigo,
      firstName: param.nombres,
      lastName: param.apellidos,
      email: param.email,
      phone: param.telefono,
      idOperator: param.codigo_operadora,
    };
  }
  override mapTo(param: ResponsibleModel): ResponsibleEntity {
    return {
      codigo: param.id,
      nombres: param.firstName,
      apellidos: param.lastName,
      email: param.email,
      telefono: param.phone,
      codigo_operadora: param.idOperator,
    };
  }
}
