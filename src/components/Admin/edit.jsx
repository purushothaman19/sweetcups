import * as React from 'react';
import './edit.css';
import Swal from 'sweetalert2';
import axios from 'axios';



export default function Edit() {

  const [cakes, fetchCakes] = React.useState([])
  const [loaded, isloaded] = React.useState(false)
  // const [err, setErr] = React.useState('')

  const getData = async () => {
    fetch('https://sweetcups-server.herokuapp.com/cakeDetails')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchCakes(res)
      })
  }

  React.useEffect(() => {
    if (cakes.length !== 0) {
      isloaded(true);
    }
    getData()
  }, [cakes])



  function Delete(e) {
    console.log(e.target.value);

    Swal.fire({
      title: 'Are you sure to delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        axios({
          method: 'post',
          url: 'https://sweetcups-server.herokuapp.com/delete',
          data: { name: e.target.value, url: e.target.ariaLabel }
        }).then((res) => {
          if (res.err) Swal.fire(`${res.err}`, '', 'info')
          else Swal.fire('Deleted!', '', 'success')
        })
          .catch((e) => {
            console.log(e.message);
            if (e.message) Swal.fire(`${e.message}`, '', 'info')

          })

      }
    })
  }

  return (
    <section id='edit-section'>

      {loaded ?

        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th> Image </th>
              <th> Name </th>
              <th> Action </th>

            </tr>
          </thead>


          <tbody>
            {(cakes.map((cake) => (

              <tr>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={`https://sweetcups-server.herokuapp.com/images/${cake.cakeImgUrl}`}
                      alt=""
                      style={{ width: '70px', height: '70px' }}
                      className="rounded-circle"
                    />
                  </div>
                </td>

                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1"> {cake.cakeName} </p>
                  </div>
                </td>

                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={Delete} value={cake.cakeName} aria-label={cake.cakeImgUrl} >
                    Delete
                  </button>
                </td>
              </tr>

            )))}

          </tbody>
        </table>
        :
        <div>
          <img src='https://cdn.dribbble.com/users/1677926/screenshots/6712556/paperplane1_still_2x.gif?compress=1&resize=400x300' alt='' />
        </div>
      }
    </section>
  );
}
