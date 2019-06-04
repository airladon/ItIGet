// @flow
import * as React from 'react';
import Button from './button';

type Props = {};

export default class Sketch extends React.Component
                                    <Props> {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  isDrawing: boolean;
  lastPoint: [number, number];

  constructor(props: Props) {
    super(props);
    this.isDrawing = false;
    this.lastPoint = [0, 0];
  }

  componentDidMount() {
    const canvas = document.getElementById('id_sketch__canvas');
    if (canvas != null && canvas instanceof HTMLCanvasElement) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.canvas.width = this.canvas.clientWidth * 2;
      this.canvas.height = this.canvas.clientHeight * 2;
      this.ctx.scale(2, 2);
      canvas.addEventListener('mousedown', this.startDrawing.bind(this));
      canvas.addEventListener('mousemove', this.draw.bind(this));
      canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    }
  }

  clientToCanvas(x: number, y: number) {
    const box = this.canvas.getBoundingClientRect();
    return [
      x - box.left,
      y - box.top,
    ];
  }

  startDrawing(event: MouseEvent) {
    this.lastPoint = this.clientToCanvas(event.clientX, event.clientY);
    this.isDrawing = true;
    this.ctx.beginPath();
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw(event: MouseEvent) {
    if (this.isDrawing) {
      const point = this.clientToCanvas(event.clientX, event.clientY);
      this.ctx.moveTo(this.lastPoint[0], this.lastPoint[1]);
      this.ctx.lineTo(point[0], point[1]);
      this.ctx.stroke();
      this.lastPoint = point;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  upload() {
    const image = this.canvas.toDataURL("image/png");
    const blob = this.dataURItoBlob(image);

    let req = new XMLHttpRequest();
    let formData = new FormData();

    formData.append('square', blob);
    req.open('POST', '/sketch');
    req.send(formData);

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", 'localhost:5003//sketch, true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({
    //     value: value
    // }));
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return <div className="sketch__container" style={{
      padding: '10px',
      paddingTop: '100px',
      backgroundColor: 'white',
    }}>
      <canvas id="id_sketch__canvas" className="sketch__canvas" style={{
        width: '500px',
        height: '500px',
        backgroundColor: '#EEE',
      }}/>
      <div className="sketch__control_container">
      <Button label="square" onClick={this.upload.bind(this)}/>
      <Button label="clear" onClick={this.clear.bind(this)}/>
      </div>
      <form encType="multipart/form-data" action="/upload/image" method="post">
          <input id="image-file" type="file" />
      </form>
    </div>;
  }
}
