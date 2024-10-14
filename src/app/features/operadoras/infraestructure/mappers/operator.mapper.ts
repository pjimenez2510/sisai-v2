import { Mapper } from '../../../../shared/utils/mapper';
import { OperatorModel } from '../../domain/models/operator.model';
import { OperatorEntity } from '../entities/operator.entity';
import { ResponsibleMapperImpl } from './responsible.mapper';

export class OperatorMapperImpl extends Mapper<OperatorEntity, OperatorModel> {
  responsibleMapper = new ResponsibleMapperImpl();
  override mapFrom(param: OperatorEntity): OperatorModel {
    return {
      id: param.codigo,
      name: param.nombre,
      ruc: param.ruc,
      phone1: param.telefono1,
      phone2: param.telefono2,
      address: param.direccion,
      observation: param.observacion,
      responsible: this.responsibleMapper.mapFrom(param.responsable),
    };
  }

  override mapTo(param: OperatorModel): OperatorEntity {
    return {
      codigo: param.id,
      nombre: param.name,
      ruc: param.ruc,
      telefono1: param.phone1,
      telefono2: param.phone2,
      direccion: param.address,
      observacion: param.observation,
      responsable: this.responsibleMapper.mapTo(param.responsible),
    };
  }
}
