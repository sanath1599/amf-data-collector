import { React, useState, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material/";
import {
  MENTOR_COACH,
  MENTOR_PE,
  MENTOR_PHYSIO,
} from "../../containers/Patient/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CandidatePerformanceMentoringForm({
  candidateDetails,
  formik,
  mentorType,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    if (
      formik.values.date !== null &&
      formik.values.date !== undefined &&
      formik.values.date !== ""
    )
      setSelectedDate(new Date(formik.values.date));
  }, [formik.values.date]);
  return (
    <Grid container spacing={3} style={{ marginTop: "5px" }}>
      <Grid item xs={12}>
        <Typography color="inherit" style={{ textAlign: "center" }}>
          {mentorType} feedback
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="name"
          required
          label="Student's name"
          fullWidth
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="id"
          label="Student's ID"
          fullWidth
          variant="standard"
          value={formik.values.id}
          onChange={formik.handleChange}
          error={formik.touched.id && Boolean(formik.errors.id)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="category"
          label="Student's Category"
          fullWidth
          variant="standard"
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
        />
      </Grid>
      <Grid item xs={12}>
        <div style={{ display: "inline-block" }}>Date: </div>
        <div style={{ display: "inline-block", marginLeft: "20px" }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              formik.setFieldValue("date", date);
            }}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </Grid>
      {mentorType === MENTOR_COACH && (
        <>
          <Grid item xs={12}>
            <TextField
              id="technical-skill"
              label="Technical skill"
              fullWidth
              variant="standard"
              value={formik.values.coach.technicalSkill}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  technicalSkill: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="short-put"
              label="Short put"
              fullWidth
              variant="standard"
              value={formik.values.coach.shortPut}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  shortPut: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="leg-position-rt"
              label="Leg position rt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.legPosition.rt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  legPosition: {
                    ...formik.values.coach.legPosition,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="leg-position-lt"
              label="Leg position lt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.legPosition.lt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  legPosition: {
                    ...formik.values.coach.legPosition,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="foot-rt"
              label="Foot rt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.foot.rt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  foot: {
                    ...formik.values.coach.foot,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="foot-lt"
              label="Foot lt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.foot.lt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  foot: {
                    ...formik.values.coach.foot,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="ankle-rt"
              label="Ankle rt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.ankle.rt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  ankle: {
                    ...formik.values.coach.ankle,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="ankle-lt"
              label="Ankle lt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.ankle.lt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  ankle: {
                    ...formik.values.coach.ankle,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="knee-rt"
              label="Knee rt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.knee.rt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  knee: {
                    ...formik.values.coach.knee,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="knee-lt"
              label="Knee lt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.knee.lt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  knee: {
                    ...formik.values.coach.knee,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="hip-rt"
              label="Hip rt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.hip.rt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  hip: {
                    ...formik.values.coach.hip,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="hip-lt"
              label="Hip lt"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.hip.lt}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  hip: {
                    ...formik.values.coach.hip,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="upperbodyBendFromShoulder"
              label="Upper body bend from shoulder"
              fullWidth
              variant="standard"
              value={formik.values.coach.upperbodyBendFromShoulder}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  upperbodyBendFromShoulder: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="rightHandFourFingersTouchInNeckBelowEar"
              label="Right hand four fingers touch in neck below ear"
              fullWidth
              variant="standard"
              value={
                formik.values.coach.rightHandFourFingersTouchInNeckBelowEar
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  rightHandFourFingersTouchInNeckBelowEar: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="trunkBendingPosition"
              label="Trunk bending position"
              fullWidth
              variant="standard"
              value={formik.values.coach.trunkBendingPosition}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunkBendingPosition: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="takeOffPositionFullBody"
              label="Take off position full body"
              fullWidth
              variant="standard"
              value={formik.values.coach.takeOffPositionFullBody}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  takeOffPositionFullBody: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="right-shoulder-rotation"
              label="Right shoulder rotation"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.rightShoulder.rotation}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  rightShoulder: {
                    ...formik.values.coach.rightShoulder,
                    rotation: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="right-shoulder-push"
              label="Right shoulder push"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.rightShoulder.push}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  rightShoulder: {
                    ...formik.values.coach.rightShoulder,
                    push: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="left-shoulder-rotation"
              label="Left shoulder rotation"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.leftShoulder.rotation}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  leftShoulder: {
                    ...formik.values.coach.leftShoulder,
                    rotation: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="left-shoulder-push"
              label="Left shoulder push"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.leftShoulder.push}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  leftShoulder: {
                    ...formik.values.coach.leftShoulder,
                    push: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="trunk-twist"
              label="Trunk twist"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.trunk.twist}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunk: {
                    ...formik.values.coach.trunk,
                    twist: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="trunk-balance"
              label="Trunk balance"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.coach.trunk.balance}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunk: {
                    ...formik.values.coach.trunk,
                    balance: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="discus-throw"
              label="Discus Throw "
              fullWidth
              variant="standard"
              value={formik.values.coach.discusThrow }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  discusThrow : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="foot-position"
              label="Foot position"
              fullWidth
              variant="standard"
              value={formik.values.coach.footPosition }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  footPosition : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="trunk-rotation"
              label="Trunk Rotation"
              fullWidth
              variant="standard"
              value={formik.values.coach.trunkRotation }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunkRotation : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="upperbody-position"
              label="Upperbody Position"
              fullWidth
              variant="standard"
              value={formik.values.coach.upperbodyPosition }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  upperbodyPosition : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Finger Release"
              label="Finger Release"
              fullWidth
              variant="standard"
              value={formik.values.coach.fingerRelease }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  fingerRelease : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="javelin-throw"
              label="Javelin Throw"
              fullWidth
              variant="standard"
              value={formik.values.coach.javelinThrow }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  javelinThrow : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="run-away"
              label="Run Away"
              fullWidth
              variant="standard"
              value={formik.values.coach.runAway }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  runAway : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="landing-position"
              label="Landing Position"
              fullWidth
              variant="standard"
              value={formik.values.coach.landingPosition}
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  landingPosition : e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="throwing-position"
              label="Throwing Position"
              fullWidth
              variant="standard"
              value={formik.values.coach.throwingPosition }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  throwingPosition : e.target.value,
                })
              }
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              id="distance"
              label="Distance"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.physicalEducators.distance}
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  distance: e.target.value,
                })
              }
            />
          </Grid>
        </>
      )}
      {mentorType === MENTOR_PHYSIO && (
        <Grid item xs={12}>
          <TextField
            id="exercise"
            label="Exercise"
            fullWidth
            multiline
            variant="standard"
            value={formik.values.physioTherapist.exercise}
            onChange={(e) =>
              formik.setFieldValue("physioTherapist", {
                ...formik.values.physioTherapist,
                exercise: e.target.value,
              })
            }
          />
        </Grid>
      )}
      {mentorType === MENTOR_PE && (
        <>
          <Grid item xs={12}>
            <TextField
              id="trainingUpdate"
              label="Training update"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.physicalEducators.trainingUpdate}
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  trainingUpdate: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="trainingVideo"
              label="Training video"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.physicalEducators.trainingVideo}
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  trainingVideo: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="strengthConditioningFeedback"
              label="Strength conditioning feedback"
              fullWidth
              multiline
              variant="standard"
              value={
                formik.values.physicalEducators.strengthConditioningFeedback
              }
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  strengthConditioningFeedback: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="technicalSkillsFeedback"
              label="Technical skills feedback"
              fullWidth
              multiline
              variant="standard"
              value={formik.values.physicalEducators.technicalSkillsFeedback}
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  technicalSkillsFeedback: e.target.value,
                })
              }
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
