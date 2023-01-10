import React, { useEffect } from 'react';
import { Button, Label, Col, Input } from 'reactstrap';
import DropDowns from '../../Contexts/InsertionContexts/DropDowns';
export default function FieldTemp(props) {
  function defaultValues(name){
    if(props.values[name]){
      return props.values[name]
    }
    else{
      return ''
    }
  }
  return (<>
    <Col md={props?.size ? props?.size : props.inputSize(props.findType(props.colname))}>
      <div className='mb-3'>
        <Label htmlFor='firstNameinput' className='form-label'>
          {props.colname}
        </Label>
        <div style={{ display: 'flex' }}>
          {props.isUnique(props.colname) ? (
            <>
              <Input
                type='text'
                id={props.colname}
                defaultValue={props.accounts[props.colname]}
                className='form-control'
                disabled
              ></Input>
              <Button
                style={{ padding: '0 .7rem' }}
                color='primary'
                className='btn btn-primary waves-effect waves-light'
                onClick={(e) => {
                  props.setIsGrid(false);
                  props?.setView('block');
                  props.setGuidTable(props.Guids(props.colname));
                  props.setGuidCol(props.colname);
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
              >

                <i style={{ fontSize: '1rem' }} className=' ri-search-line'></i>
              </Button>
              <Button
                color='primary'
                className='btn btn-danger waves-effect waves-light'
                onClick={(e) => {
                  props.setData(props.colname, '')
                  props?.setAccounts(props.colname, '')
                  delete props.accounts[props.colname]
                  delete props.values[props.colname] 
                }}
              >
                X</Button>
            </>
          ) : props?.isDrop ? (<>
            <select defaultValue={defaultValues(props.colname)} onBlur={(e) => { e.preventDefault(); props.setData(props.colname, e.target.value);}} className="form-select">
                <option value={0} selected>Choose...</option>
                {DropDowns(props.colname).map((x, i) => {
                  return <option key={i+1} value={i+1}>{x}</option>
                })}
            </select>
                  </>) : props?.isDisabled? (<>
                    <Input
              type={props.findType(props.colname)}
              defaultValue={defaultValues(props.colname)}
              className='form-control'
              name={props.colname}
              id={props.colname}
              disabled
            ></Input>
                  </>) : (
            <Input
              type={props.findType(props.colname)}
              defaultValue={defaultValues(props.colname)}
              className='form-control'
              name={props.colname}
              id={props.colname}
              onBlur={(e) => props.setData(props.colname, e.target.value)}
            ></Input>
          )}
        </div>
      </div>
    </Col>
    </>
  );
}
